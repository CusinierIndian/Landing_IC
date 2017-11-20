class ExceptionTransformer:
	def __init__(self):
		pass


	def transformExceptionAuth(self, errorCode, errorMessage, status):
		return {
			'notification' : {
				'errorCode' : errorCode,
				'errorMessage' : errorMessage,
				'status' : status
			}
		}

class Transformer:
	def __init__(self):
		pass

	def transformAuthResponse(self, response, code, status):
		return {
			'data' : {
				'id' : response.id,
				'name' : response.name,
				'email' : response.email,
				'userType' : response.userType
			},
			'notification' : {
				'code' : code,
				'status' : status
			}
		}