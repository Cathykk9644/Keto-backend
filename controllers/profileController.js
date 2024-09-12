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
      // Perform the update
      const [updateCount] = await this.model.update(
        {
          firstName,
          lastName,
          profile_picture,
        },
        { where: { id: userId } }
      );

      // Check if the update was successful
      if (updateCount === 0) {
        return res.status(404).json({
          error: true,
          msg: "User not found or no data changed.",
        });
      }

      // Fetch and return the updated user profile
      const updatedUserProfile = await this.model.findOne({
        where: { id: userId },
      });
      if (updatedUserProfile) {
        return res.status(200).json(updatedUserProfile); // Returning the updated user data
      } else {
        return res.status(404).json({
          error: true,
          msg: "Updated user not found.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };
}

module.exports = ProfileController;
