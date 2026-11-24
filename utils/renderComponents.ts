import Components from "@components/__Components__/Components";

export function RenderComponents(components, inSublayout = false) {
  if (!components) {
    return null;
  }

  return components.map((block: any, index: number) => {
    const component = {
      component: block?.sys?.contentType?.sys?.id,
      uid: block.sys.id,
      inSublayout,
      ...block.fields,
    };
    return Components(component, block.fields, null, index);
  });
}

export default RenderComponents;
