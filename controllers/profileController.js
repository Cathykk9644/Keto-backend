const BaseController = require("./baseController");

class ProfileController extends BaseController {
  constructor(model, userModel) {
    super(model);
    this.userModel = userModel;
  }

  // Retrieve a user profile by user ID
  getUserProfile = async (req, res) => {
    const { userId } = req.params;
    try {
      const userProfile = await this.model.findByPk(userId);
      if (!userProfile) {
        return res.status(404).json({
          success: false,
          msg: `No user profile found with the user ID of ${userId}`,
        });
      }
      return res.status(200).json({
        success: true,
        data: userProfile,
        msg: "Success: User profile retrieved",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: `Error: unable to retrieve user profile with ID ${userId}.`,
      });
    }
  };

  updateUserProfile = async (req, res) => {
    const { userId } = req.params;

    const { firstName, lastName, profile_picture } = req.body;

    try {
      const updatedUserProfile = await this.model.update(
        {
          firstName: firstName,
          lastName: lastName,
          profile_picture: profile_picture,
        },
        { where: { id: userId } }
      );
      return res.status(200).json(updatedUserProfile);
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };
}

module.exports = ProfileController;
