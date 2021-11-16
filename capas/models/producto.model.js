const { model, Schema } = require('mongoose');

const ProductosSchema = Schema(
{
    nombre:{

        type: String,
        required: [true, 'nombre del producto abligatorio'],
        unique: true,
    },

    estado:{

        type: Boolean,
        default: true,
        required: true, 
    },

    precio:{

        type: Number,
        default:0
    },

    minimo:{

        type: Number,
        default:0
    },

    nombre:{},
    estado:{},
    precio:{},
    minimo:{},
});

ProductosSchema.methods.toJson = function()
{
    const { _id, __v, estado, ...data} = this.toObject(); 
    return data;
}

module.exports = model('Producto',ProductosSchema);

