module.exports = {
  paths: {
    "/mytable": {
      get: {
        tags: ["MyTable"],
        summary: "Obtener todos los registros",
        responses: {
          200: {
            description: "Lista completa de registros de MyTable",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/MyTable",
                  },
                },
              },
            },
          },
        },
      },
    },

    "/mytable/dgenerica/{dgenerica_}": {
      get: {
        tags: ["MyTable"],
        summary: "Obtener registros por campo dgenerica_",
        parameters: [
          {
            name: "dgenerica_",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            example: "Educación Primaria",
          },
        ],
        responses: {
          200: {
            description: "Registros filtrados por dgenerica_",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/MyTable",
                  },
                },
              },
            },
          },
        },
      },
    },

    "/mytable/regimen/{regimen}": {
      get: {
        tags: ["MyTable"],
        summary: "Obtener registros por régimen",
        parameters: [
          {
            name: "regimen",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            example: "General",
          },
        ],
        responses: {
          200: {
            description: "Registros filtrados por régimen",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/MyTable",
                  },
                },
              },
            },
          },
        },
      },
    },

    "/mytable/codpos/{codpos}": {
      get: {
        tags: ["MyTable"],
        summary: "Obtener registros por código postal",
        parameters: [
          {
            name: "codpos",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
            example: 46001,
          },
        ],
        responses: {
          200: {
            description: "Registros filtrados por código postal",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/MyTable",
                  },
                },
              },
            },
          },
        },
      },
    },

    "/mytable/Geo_Point/{Geo_Point}": {
      get: {
        tags: ["MyTable"],
        summary: "Obtener registros por coordenada Geo_Point",
        parameters: [
          {
            name: "Geo_Point",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            example: "39.4699, -0.3763",
          },
        ],
        responses: {
          200: {
            description: "Registros filtrados por Geo_Point",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/MyTable",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
