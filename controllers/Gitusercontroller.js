const express = require("express");
const axios = require("axios");
const GituserController = express.Router();
const GitUserModel=require("../models/gitusermodel")

GituserController.post("/:gitusername",async(req,res)=>{
    const {gitusername}=req.params
    const gituser=await GitUserModel.findOne({login:gitusername})
    if(gituser){
        return res.send("This user already exists")
    }
     var config = {
    method: "get",
    url: `https://api.github.com/users/${gitusername}`,
  };
  axios(config)
    .then(async function (response) {
      const data = response.data;
      const {
        login,
        id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      } = data;
      const gituserdata=new GitUserModel({
        login,
        id,
        node_id,
        avatar_url,
        gravatar_id,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        public_gists,
        followers,
        following,
        created_at,
        updated_at,
      });
      await gituserdata.save()
      res.send(response.data)
      })
      .catch(function (error) {
      res.send("This user Not Found");
    });
})
module.exports = GituserController;

