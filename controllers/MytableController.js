//const Mytable = require('../models/Mytable')
const db = require('../models');
const MyTable = db.MyTable; 
const { Op, where } = require('sequelize');

const MytableController = {
    //GETTALL
    async getAll (req,res) {
        try {
            const mytable = await MyTable.findAll();
            res.status(200).send(mytable)
        } catch (error) {
           console.error(error)
           res.status(500).send({message: 'No funcionó, prueba de nuevo'})
        }
    },
    //GetDgenerica
    async getBydgenerica (req,res) {
        try {
            const searchTerm = req.params.dgenerica_;
            const mytables = await MyTable.findAll({
                where: {
                    dgenerica_: {
                        [Op.like]: `%${searchTerm}%` 
        }
      }
    });
            res.status(200).send(mytables)
        } catch (error) {
            console.error(error)
           res.status(500).send({message: 'No funcionó, prueba de nuevo'})
        }
    },
    //GetRegimen
    async getByRegimen (req, res){
        try {
            const searchTerm = req.params.regimen;
            const mytables = await MyTable.findAll({
                where: {
                    regimen:{
                        [Op.like]:`%${searchTerm}%`
                    }
                }
            })
            res.status(200).send(mytables)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: 'No funcionó, prueba de nuevo'})
        }
    },
    //GetCodpos
    async getByCodpos (req, res) {
       try {
            const searchTerm = req.params.codpos;
            const mytables = await MyTable.findAll({
                where: {
                    codpos:{
                    [Op.like]:`%${searchTerm}%`
                    }
                }
            })
            res.status(200).send(mytables)
       } catch (error) {
        console.error(error)
            res.status(500).send({message: 'No funcionó, prueba de nuevo'})
       }
    },
    //GetGeoPoint
    async getByGeoPoint (req,res){
        try {
            const searchTerm = req.params.Geo_Point;
            const mytables = await MyTable.findAll({
                where: {
                    Geo_Point:{
                    [Op.like]:`%${searchTerm}%`
                    }
                }
            })
            res.status(200).send(mytables)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: 'No funcionó, prueba de nuevo'})
        }
    }
}

//filtro codigo postal y regimen 

module.exports = MytableController