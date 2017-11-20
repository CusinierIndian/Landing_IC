from models.models import db
from sqlalchemy.exc import IntegrityError
from constants.constants import Constants
from authentication.transformer.transformers import ExceptionTransformer, Transformer
class DBOperations:
	def __init__(self):
		self.session = db.session()
		self.exceptionTransformer = ExceptionTransformer()
		self.transformer = Transformer()

	# method to register a new user
	# Types of User are admin and customer
	def registerUser(self, registerUserData):
		try:
			self.session.add(registerUserData)
			self.session.commit()
		except IntegrityError as integrityError:
			return self.exceptionTransformer.transformExceptionAuth(Constants.INTEGRITY_ERROR_CODE, Constants.INTEGRITY_ERROR, Constants.STATUS_FAILED)
		except Exception as e:
			return self.exceptionTransformer.transformExceptionAuth(Constants.DATABASE_ERROR, e.message, Constants.STATUS_FAILED)
		else:
			return self.transformer.transformAuthResponse(registerUserData.query.filter_by(id=registerUserData.id).first(), Constants.SUCCESS_CODE, Constants.STATUS_SUCCESS)

