figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === "convert-to-blue-monotone") {
    const nodes = figma.currentPage.selection;

    for (const node of nodes) {
      if ("fills" in node) {
        const fills = node.fills.map((fill) => {
          if (fill.type === "SOLID") {
            return {
              ...fill,
              color: { r: 0, g: 0, b: fill.color.b },
            };
          }
          return fill;
        });
        node.fills = fills;
      }
    }
  }

  figma.closePlugin();
};
