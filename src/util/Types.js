export function Types(incoming) {
  return incoming.map(type => {
      return type.type.name
        .toLowerCase()
        .split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    })
    .join(", ");
  } 