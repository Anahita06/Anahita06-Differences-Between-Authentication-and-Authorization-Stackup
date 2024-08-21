const authController = require('../controllers/authController'); 
const { authentication, authorisation } = require('../middlewares/auth'); 

router.post(
    "/delete/user",
    authentication,
    authorisation({ isAdmin: false }), 
    authController.delete_user_by_username
);
