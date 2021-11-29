import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewsCrtl from "./reviews.controller.js"


const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

router
    .route("/review")
    .post(ReviewsCrtl.apiPostReview)
    .put(ReviewsCrtl.apiUpdateReview)
    .delete(ReviewsCrtl.apiDeleteReview)

export default router;