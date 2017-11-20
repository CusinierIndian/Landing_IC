from flask import Blueprint, request, jsonify
from werkzeug.exceptions import BadRequest
from flask_mail import Mail, Message
from config import app
import jwt
import datetime

authentication = Blueprint('authentication', __name__, template_folder='templates')
@authentication.route('/register', methods=['POST'])
def registerUser():
	try:
		registerUserData = request.get_json()
	except BadRequest as badRequest:
		from authentication.transformer.transformers import ExceptionTransformer
		from constants.constants import Constants
		return jsonify(ExceptionTransformer().transformExceptionAuth(Constants.INVALID_INPUT, Constants.INVALID_JSON, Constants.STATUS_FAILED))
	else:
		from authentication.controller.controller import AuthenticationController
		response = AuthenticationController().registerUser(registerUserData)
		status = response.get('notification').get('status')
		from constants.constants import Constants
		if status == Constants.STATUS_SUCCESS:
			subject = 'Verification link'
			sender = 'indiancuisinier@gmail.com'
			receiver = response.get('data').get('email')
			jwt_payload = jwt.encode({'response' : response, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)}
				, app.config['SECRET_KEY'], algorithm='HS256')
			link = Constants.BASE_URL+'/ic/verify/'+jwt_payload
			message = 'Click here to verify your email with IndianCuisinier'
			from utility.mailer import Mailer
			Mailer().sendAsyncMailWithToken(subject, sender, receiver, link, message, 'auth/verification.html')

		return jsonify(response)

@authentication.route('/verify/<token>')
def verifyEmail(token):
	try:
		jwt_payload_data = jwt.decode(token, app.config['SECRET_KEY'] ,leeway=datetime.timedelta(minutes=10), algorithms=['HS256'])
	except Exception as e:
		return jsonify({'message' : e.message})
	else:
		return jsonify(jwt_payload_data.get('response'))

	

