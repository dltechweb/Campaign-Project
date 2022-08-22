const TgifModel = require('../models/tgif-model');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { createCustomError } = require('../errors/custom-error')


const getAllDatas_tgif = asyncWrapper( async (req, res) => {
    const tgif_all_Datas = await TgifModel.find({});
    res.status(200).json({ tgif_all_Datas });
  })

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

  const createData_tgif =asyncWrapper( async (req, res) => {
    const CampName = req.body.CampName
    const Title = req.body.Title
    const Abstract = req.body.Abstract

    // const tgifData = new TgifModel({CampName: CampName, Title: Title, Abstract:Abstract})
    // await tgifData.create();
    // const tgif_created_Data = await TgifModel.create(req.body);
    const tgif_created_Data = await TgifModel.create({CampName: CampName, Title: Title, Abstract:Abstract});

    res.status(201).json({ tgif_created_Data });
   
  });

  const getData_tgif = asyncWrapper( async (req, res) => {
      const { id: taskID } = req.params;
      const tgif_Get_single_Data = await TgifModel.findOne({ _id: taskID });
      if (!tgif_Get_single_Data) {
        return next(createCustomError(`No task with id : ${taskID}`,404))
        // return res.status(404).json({ msg: `No task with id: ${taskID}` });
      }
      res.status(200).json({ tgif_Get_single_Data });
  })

  module.exports = {
    getAllDatas_tgif,
    createData_tgif,
    getData_tgif,
  }