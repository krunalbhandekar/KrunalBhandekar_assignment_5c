const mongoose=require("mongoose")
const GitUserSchema=new mongoose.Schema({
  login: {type:String,required:true},
  id: {type:Number,required:true},
  node_id: {type:String,required:true},
  avatar_url: {type:String,required:true},
  gravatar_id: {type:String,required:true},
  url: {type:String,required:true},
  html_url: {type:String,required:true},
  followers_url: {type:String,required:true},
  following_url: {type:String,required:true},
  gists_url: {type:String,required:true},
  starred_url: {type:String,required:true},
  subscriptions_url: {type:String,required:true},
  organizations_url: {type:String,required:true},
  repos_url: {type:String,required:true},
  events_url: {type:String,required:true},
  received_events_url: {type:String,required:true},
  type: {type:String,required:true},
  site_admin: {type:Boolean,required:true},
  name: {type:String,required:true},
  company: {type:String,required:true},
  blog: {type:String,required:true},
  location: {type:String,required:true},
  email: {type:String,required:true},
  hireable: {type:String,required:true},
  bio: {type:String,required:true},
  twitter_username: {type:String,required:true},
  public_repos: {type:Number,required:true},
  public_gists: {type:Number,required:true},
  followers: {type:Number,required:true},
  following: {type:Number,required:true},
  created_at: {type:String,required:true},
  updated_at: {type:String,required:true}
})

const GitUserModel = mongoose.model("user", GitUserSchema)


module.exports = GitUserModel