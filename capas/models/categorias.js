const { model, Schema } = require('mongoose');

const CategoriaSchema = Schema(
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

});


module.exports = model('Categoria',CategoriaSchema);

