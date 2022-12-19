const graphql = require('graphql');
const Product = require('../modules/product')

const{ 
      GraphQLSchema,
      GraphQLObjectType,
      GraphQLString,
      GraphQLList,
      GraphQLFloat } = graphql;

const ProductType = new GraphQLObjectType({
  name : 'Product',
  fields : () =>{

    id : { type: GraphQLString }
    name : { type : GraphQLString }
    category : { type : GraphQLString }
    filter : { type : GraphQLSchema }
    price : { type : graphql.GraphQLFloat }
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'Hello GraphQl !';
      },
    },
  },
  products : {
    type: new GraphQLList(ProductType),
    resolve(parent, args){
        return Product.find({});
    },
  },

  products : {
    type: new GraphQLList(ProductType),
    args : { category : { type: GraphQLString } },
    resolve(parent, args){
        return Product.find({ category : category.args });
    },
  },
});

var schema = new GraphQLSchema({
    query: RootQuerys,
});
// module.exports = RootQuery
module.exports = schema 