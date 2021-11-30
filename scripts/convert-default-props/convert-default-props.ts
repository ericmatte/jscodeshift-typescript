import { API, FileInfo } from "jscodeshift";

enum Type {
  Variable,
  Inline,
  External,
}

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const componentsToMigrate = root.find(j.ExpressionStatement, (v) => {
    return v.expression.left?.property?.name === "defaultProps";
  });

  componentsToMigrate.forEach((p) => {
    const expression = p.value.expression as any;
    let type: Type = Type.Variable;
    if (expression.right.type === "ObjectExpression") {
      type = Type.Inline;
    }
    let shouldRemoveDefaultProps = true;

    const constDefaultProps =
      type === Type.Inline
        ? j(expression.right)
        : root
            .find(j.VariableDeclaration, (v) => {
              return v.declarations[0]?.id?.name === expression.right.name;
            })
            .at(0);

    const componentName = expression.left.object.name;
    const component = root.findVariableDeclarators(componentName).at(0);
    if (!constDefaultProps && !component) {
      return;
    }

    if (type === Type.Variable && constDefaultProps.size() !== 0) {
      constDefaultProps.forEach((p) => {
        if (p.node.declarations[0].init.type === "Identifier") {
          j(p).replaceWith(`${j(p).toSource()} /** TODO: Add to ${componentName} */`);
          type = Type.External;
        }
      });
    }

    constDefaultProps.forEach((p) => {
      j(p)
        .find(j.SpreadElement)
        .replaceWith((p2) => {
          shouldRemoveDefaultProps = false;
          return `${j(p2).toSource()} /** TODO: To be validated */`;
        });
    });

    constDefaultProps.find(j.ObjectProperty).forEach((prop) => {
      const defaultValue = j(prop.value.value).toSource();

      const variableToDefault = component
        .find(j.ObjectPattern)
        .at(0)
        .find(j.ObjectProperty, (v) => {
          return v.key.name === (prop.value.key as any).name;
        });

      if (variableToDefault.size() > 0) {
        variableToDefault.replaceWith((p) => {
          return `${j(p).toSource().split(" =")[0]} = ${defaultValue}`;
        });
        j(prop).remove();
      } else {
        j(prop).replaceWith(`${j(prop).toSource()} /** TODO: Add to ${componentName} */`);
        shouldRemoveDefaultProps = false;
      }
    });

    if (type === Type.Inline && shouldRemoveDefaultProps) {
      j(p).remove();
    } else if (type === Type.Variable) {
      j(p).remove();
      if (shouldRemoveDefaultProps) {
        constDefaultProps.remove();
      }
    } else if ((type as Type) === Type.External) {
      j(p).remove();
      // constDefaultProps.replaceWith(`${constDefaultProps.toSource()} /** TODO: Add to ${componentName} */`);
    }
  });

  return root.toSource();
}
