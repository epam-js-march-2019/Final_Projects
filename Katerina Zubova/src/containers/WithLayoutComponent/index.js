import React from 'react'

import withLayout from '../../highOrderComponents/withLayout.js'

import Profile from "../Profile";
import Login from "../Login";
import SignIn from "../../components/SignIn";
import TrekkingArticle from "../TrekkingArticle";


export const WithLayoutTrekkingArticle = withLayout(TrekkingArticle);
export const WithLayoutProfile = withLayout(Profile);
export const WithLayoutLogin= withLayout(Login);
export const WithLayoutSignIn= withLayout(SignIn);
