import ideaModel from '../model/idea-model.js';

class IdeaRepository {
  constructor() {
    this.ideaModel = ideaModel;
  }

  async createIdea(data) {
    try {
      const idea = await this.ideaModel.create(data);
      return idea;
    } catch (error) {
      console.log('Something went wrong in idea repo (createIdea)', error);
      throw error;
    }
  }

  async deleteIdea(id) {
    try {
      const idea = await this.ideaModel.findById(id);
      if (!idea) {
        throw new Error(`Idea with id ${id} not found`);
      }
      const response = await this.ideaModel.deleteOne({ _id: id });
      return response;
    } catch (error) {
      console.log('Something went wrong in idea repo (deleteIdea)', error);
      throw error;
    }
  }

  async updateIdea(id, data) {
    try {
      const response = await this.ideaModel.findByIdAndUpdate(id, data, { new: true });
      return response;
    } catch (error) {
      console.log('Something went wrong in idea repo (updateIdea)', error);
      throw error;
    }
  }

  async getIdea(id) {
    try {
      const response = await this.ideaModel.findById(id);
      if (!response) {
        throw new Error(`Idea with id ${id} not found`);
      }
      return response;
    } catch (error) {
      console.log('Something went wrong in idea repo (getIdea)', error);
      throw error;
    }
  }
  async find(condition) {
    try {
      const idea = await this.ideaModel.findOne(condition); // findOne queries based on the condition
      return idea;
    } catch (error) {
      throw error;
    }
  }
}

export default IdeaRepository;