import React from "react";
import {GRAPHQL_API_URL} from './constant';

const fetch = require('graphql-fetch')(GRAPHQL_API_URL);

class GithubService {
    static getRepository() {
        let query = `
    query($number_of_repos:Int!) {
        viewer {
          name
           repositories(last: $number_of_repos) {
             nodes {
               name
             }
           }
         }
      }
    `
        let queryVars = {
            "number_of_repos": 3
        }
        let opts = {
            
        }

        /**
     * @param  {Query} query graphql query
     * @param  {Object} [vars]  graphql query args, optional
     * @param  {Object} [opts]  fetch options, optional
     */
        return fetch(query, queryVars, opts);
    }
}

export default GithubService;
