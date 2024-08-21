const UserModel = require('../models/UserModel'); 

exports.delete_user_by_username = async (req, res) => {
    const { username } = req.body;
    try {
        const result = await UserModel.destroy({
            where: { username }
        });

        if (result) {
            res.status(200).json({ message: `User ${username} deleted successfully.` });
        } else {
            res.status(404).json({ message: `User ${username} not found.` });
        }
    } catch (error) {
        res.status(500).json({ message: `Error deleting user: ${error.message}` });
    }
};
