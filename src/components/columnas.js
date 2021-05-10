export function headRows(tipoTemplate, templateSubgrupo = "") {
  if (tipoTemplate === "TEMPLATE_FISCALIZACION") {
    const template = [
      {
        nro_afiliado: "AF",
        nombre: "Nombre",
        apellido: "Apellido",
        horario: "      ",
        horarioDesde: "Hora",
        firmaEntrada: "Firma",
        horarioHasta: "Hora",
        firmaSalida: "Firma",
      },
    ];
    return template;
  }

  if (
    tipoTemplate === "TEMPLATE_GENERAL" &&
    templateSubgrupo === "TEMPLATE_GENERAL_SUB1"
  ) {
    return [
      {
        nro_afiliado: "AF",
        nombre: "Nombre",
        apellido: "Apellido",
        horario: "      ",
        horarioDesde: "Hora",
        firmaEntrada: "Firma",
        horarioHasta: "Hora",
        firmaSalida: "Firma",
      },
    ];
  }
  if (
    tipoTemplate === "TEMPLATE_GENERAL" &&
    templateSubgrupo === "TEMPLATE_GENERAL_SUB1"
  ) {
    return [
      {
        nro_afiliado: "AF",
        nombre: "Nombre",
        apellido: "Apellido",
        horario: "      ",
        horarioDesde: "Hora",
        firmaEntrada: "Firma",
        horarioHasta: "Hora",
        firmaSalida: "Firma",
      },
    ];
  }
  if (
    tipoTemplate === "TEMPLATE_GENERAL" &&
    templateSubgrupo === "TEMPLATE_GENERAL_SUB2"
  ) {
    return [
      {
        nro_afiliado: "AF",
        nombre: "Nombre",
        apellido: "Apellido",
        horario: "      ",
        horarioDesde: "Hora",
        firmaEntrada: "Firma",
        horarioHasta: "Hora",
        firmaSalida: "Firma",
      },
    ];
  }
  if (
    tipoTemplate === "TEMPLATE_GENERAL" &&
    templateSubgrupo === "TEMPLATE_GENERAL_SUB3"
  ) {
    return [
      {
        nro_afiliado: "AF",
        nombre: "Nombre",
        apellido: "Apellido",
        horario: "      ",
        horarioDesde: "Hora",
        firmaEntrada: "Firma",
        horarioHasta: "Hora",
        firmaSalida: "Firma",
      },
    ];
  }

  if (tipoTemplate === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
    return [
      {
        nro_afiliado: "AF",
        nombre: "Nombre",
        apellido: "Apellido",
        horario: "      ",
        horarioDesde: "Hora",
        firmaEntrada: "Firma",
        horarioHasta: "Hora",
        firmaSalida: "Firma",
      },
    ];
  }
  if (tipoTemplate === "TEMPLATE_ORDENANZAS") {
    return [
      {
        nro_afiliado: "AF",
        nombre: "Nombre",
        apellido: "Apellido",
        horario: "      ",
        horarioDesde: "Hora",
        firmaEntrada: "Firma",
        horarioHasta: "Hora",
        firmaSalida: "Firma",
      },
    ];
  }
  if (tipoTemplate === undefined || tipoTemplate === null) {
    return [
      {
        mensaje: "No hay datos para mostrar",
      },
    ];
  }
}

export const columnas = [
  {
    Header: "Numero Afiliado",
    accessor: "nro_afiliado",
  },
  {
    Header: "Nombre",
    accessor: "nombre",
  },
  {
    Header: "Apellido",
    accessor: "apellido",
  },
  {
    Header: "Hora",
    accessor: "horarioDesde",
  },
  {
    Header: "Firma",
    accessor: "firmaEntrada",
  },
  {
    Header: "Hora",
    accessor: "horarioHasta",
  },
  {
    Header: "Firma",
    accessor: "firmaSalida",
  },
];
