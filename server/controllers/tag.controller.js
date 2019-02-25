const Introductions = require('./../models/IntroductionTag');
const Feedbacks = require('./../models/FeedbackTag');
const Resources = require('./../models/ResourcesTag');

module.exports = {
  async sendTags (queryData) {
    const { value, category } = queryData;
    const query = new RegExp(`^${value}`, 'i');
    if (category === 'introductions') {
      return this.getTagsFromDB(query, Introductions, category);
    } else if (category === 'feedback') {
      return this.getTagsFromDB(query, Feedbacks, category);
    } else {  
      return this.getTagsFromDB(query, Resources, category);
    }
  },

  async getTagsFromDB(query, model, category) {
    const json = model.find({ name: query }).limit(5).exec();
      return await json.then(data => ({
        tags: data,
        category,
    }));
  },
};
