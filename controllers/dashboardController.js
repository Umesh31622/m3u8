exports.getDashboard = async (req, res) => {
  res.json({
    message: "Welcome to Admin Dashboard 🚀",
    adminId: req.admin.id
  });
};