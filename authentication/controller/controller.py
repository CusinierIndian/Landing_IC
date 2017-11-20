from constants.constants import Constants
from utility.utilities import generateUniqueId
class AuthenticationController:
	def __init__(self):
		from authentication.database.dboperations import DBOperations
		self.dbConnection = DBOperations()

	def registerUser(self, registerUserData):
		userType = registerUserData.get('user')
		if userType == Constants.ADMIN_USER:
			from models.models import AdminUser
			adminUser = AdminUser(str(generateUniqueId()), registerUserData.get('name'), registerUserData.get('email')
				, registerUserData.get('password'), userType)
			return self.dbConnection.registerUser(adminUser)