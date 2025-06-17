module.exports = {
  components: {
    schemas: {
      MyTable: {
        type: "object",
        properties: {
          Geo_Point: {
            type: "string",
            example: "39.4699, -0.3763",
          },
          Geo_Shape: {
            type: "string",
            example: "POLYGON((...))",
          },
          codcen: {
            type: "integer",
            example: 12345,
          },
          dlibre: {
            type: "string",
            example: "Centro Educativo ABC",
          },
          dgenerica_: {
            type: "string",
            example: "Educación Primaria",
          },
          despecific: {
            type: "string",
            example: "Público",
          },
          regimen: {
            type: "string",
            example: "General",
          },
          adrees: {
            type: "string",
            example: "Calle Mayor, 12",
          },
          codpos: {
            type: "integer",
            example: 46001,
          },
          municipio_: {
            type: "string",
            example: "Valencia",
          },
          provincia_: {
            type: "string",
            example: "Valencia",
          },
          telef: {
            type: "integer",
            example: 961234567,
          },
          fax: {
            type: "integer",
            example: 961234568,
          },
          mail: {
            type: "string",
            example: "contacto@centroabc.es",
          },
        },
        required: ["codcen"],
      },
    },
  },
};
