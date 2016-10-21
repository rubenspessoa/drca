Parse.Cloud.define('systemStatus', function(req, res) {
	res.success(true);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Class = Parse.Object.extend('Class');
const className = 'name';
const classCode = 'code';
const classCredits = 'credits';
const classIsMandatory = 'isMandatory';
const classIsAvailable = 'isAvailable';
const classRequiredCredit = 'requiredCredit';
const classRequiredClasses = 'requiredClasses';
const classTeacher = 'teacher';
const classCourse = 'course';

Parse.Cloud.define('fetchClasses', function(req, res) {
	var query = new Parse.Query(Class);
	query.find().then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchClassWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Class);
	query.get(id).then(function(c) {
		res.success(c);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchClassesByIds', function(req, res) {
	const ids = req.params.ids;

	if(typeof ids !== 'object') {
		res.error('invalid ids type');
	}
	for(var i = 0; i < ids.length; i++) {
		if(typeof ids[i] !== 'string') {
			res.error('invalid id type (' + ids[i] + ')');
		}
	}

	var query = new Parse.Query(Class);
	query.containedIn('objectId', ids);
	query.find().then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchClassesForCourseWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Course);
	query.get(id).then(function(result) {
		query = new Parse.Query(Class);
		query.equalTo(classCourse, result);
		return query.find(function(result) {
			return Parse.Promise.as(result);
		}, function(error) {
			return Parse.Promise.error(error);
		});	
	}).then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchClassesForDepartmentWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Department);
	query.get(id).then(function(department) {
		const grad = department.get(departmentGradSecretary);
		const doc = department.get(departmentDocSecretary);

		var query1 = new Parse.Query(Course);
		query1.equalTo(courseSecretary, grad);
		var query2 = new Parse.Query(Course);
		query2.equalTo(courseSecretary, doc);
		query = Parse.Query.or(query1, query2);

		return query.find();
	}).then(function(courses) {
		query = new Parse.Query(Class);
		query.containedIn(classCourse, courses);
		return query.find()
	}).then(function(classes) {
		res.success(classes);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchClassesForSecretaryWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Secretary);
	query.get(id).then(function(secretary) {
		query = new Parse.Query(Course);
		query.equalTo(courseSecretary, secretary);
		return query.find();
	}).then(function(courses) {
		query = new Parse.Query(Class);
		query.containedIn(classCourse, courses);
		return query.find()
	}).then(function(classes) {
		res.success(classes);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchClassesForStudentWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Student);
	query.get(id).then(function(student) {
		classesIds = student.get(studentCoursedClasses);

		if(typeof classesIds !== 'object') {
			return Parse.Promise.as([]);
		}
		else {
			return Parse.Promise.as(classesIds);
		}
	}).then(function(ids) {
		if(typeof ids !== 'object') {
			return Parse.Promise.as([]);
		}
		else if(ids.length <= 0) {
			return Parse.Promise.as([]);
		}

		query = new Parse.Query(Class);
		query.containedIn('objectId', ids);

		return query.find();
	}).then(function(classes) {
		res.success(classes);
	}, function(error) {
		res.error(error);
	});
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Course = Parse.Object.extend('Course');
const courseName = 'name';
const courseSecretary = 'secretary';
Parse.Cloud.define('fetchCourses', function(req, res) {
	var query = new Parse.Query(Course);
	query.find().then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchCourseWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string ') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Course);
	query.get(id).then(function(course) {
		res.success(course);
	}, function(error) {
		res.error(error);
	});
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Department = Parse.Object.extend('Department');
const departmentName = 'name';
const departmentGradSecretary = 'gradSecretary';
const departmentDocSecretary = 'docSecretary';
Parse.Cloud.define('fetchDepartments', function(req, res) {
	var query = new Parse.Query(Department);
	query.find().then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchDepartmentForSecretaryWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Secretary);
	query.get(id).then(function(result) {
		query = new Parse.Query(Department);
		query.equalTo(departmentDocSecretary, result);
		var query2 = new Parse.Query(Department);
		query2.equalTo(departmentGradSecretary, result)

		query = Parse.Query.or(query, query2);

		return query.first(function(result) {
			return Parse.Promise.as(result);
		}, function(error) {
			return Parse.Promise.error(error);
		});	
	}).then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchDepartmentForStudentWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Student);
	query.get(id).then(function(student) {
		const course = student.get(studentCourse);
		query = new Parse.Query(Course);
		return query.get(course.id);
	}).then(function(course) {
		const secretary = course.get(courseSecretary);
		query = new Parse.Query(Secretary);
		return query.get(secretary.id);
	}).then(function(secretary) {
		query1 = new Parse.Query(Department);
		query1.equalTo(departmentGradSecretary, secretary);

		query2 = new Parse.Query(Department);
		query2.equalTo(departmentDocSecretary, secretary);

		query = Parse.Query.or(query1, query2);

		return query.first();
	}).then(function(department) {
		res.success(department);
	}, function(error) {
		res.error(error);
	});
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Secretary = Parse.Object.extend('Secretary');
const secretaryName = 'name';
Parse.Cloud.define('fetchSecretaries', function(req, res) {
	var query = new Parse.Query(Secretary);
	query.find().then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchSecretaryWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Secretary);
	query.get(id).then(function(secretary) {
		res.success(secretary);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchSecretaryForStudentWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Student);
	query.get(id).then(function(student) {
		const course = student.get(studentCourse);
		query = new Parse.Query(Course);
		return query.get(course.id);
	}).then(function(course) {
		const secretary = course.get(courseSecretary);
		query = new Parse.Query(Secretary);
		return query.get(secretary.id);
	}).then(function(secretary) {
		res.success(secretary);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchDocSecretaryForStudentWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Student);
	query.get(id).then(function(student) {
		const course = student.get(studentCourse);
		query = new Parse.Query(Course);
		return query.get(course.id);
	}).then(function(course) {
		const secretary = course.get(courseSecretary);

		var query1 = new Parse.Query(Department);
		query1.equalTo(departmentGradSecretary, secretary);
		var query2 = new Parse.Query(Department);
		query2.equalTo(departmentDocSecretary, secretary);

		query = Parse.Query.or(query1, query2);

		return query.first();
	}).then(function(department) {
		const doc = department.get(departmentDocSecretary);
		query = new Parse.Query(Secretary);
		return query.get(doc.id);
	}).then(function(docSecretary) {
		res.success(docSecretary);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchSecretaryForClassWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Class);
	query.get(id).then(function(clss) {
		const course = clss.get(classCourse);
		query = new Parse.Query(Course);
		return query.get(course.id);
	}).then(function(course) {
		const secretary = course.get(courseSecretary);
		query = new Parse.Query(Secretary);
		return query.get(secretary.id);
	}).then(function(secretary) {
		res.success(secretary);
	}, function(error) {
		res.error(error);
	});
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Student = Parse.Object.extend('Student');
const studentName = 'name';
const studentRegistry = 'registry';
const studentMandatoryCredits = 'mandatoryCredits';
const studentElectiveCredit = 'electiveCredit';
const studentCourse = 'course';
const studentCoursedClasses = 'coursedClasses';

Parse.Cloud.define('fetchStudents', function(req, res) {
	var query = new Parse.Query(Student);
	query.find().then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchStudentWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Student);
	query.get(id).then(function(student) {
		res.success(student);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchStudentsForDepartmentWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Department);
	query.get(id).then(function(department) {
		const grad = department.get(departmentGradSecretary);
		const doc = department.get(departmentDocSecretary);

		var query1 = new Parse.Query(Course);
		query1.equalTo(courseSecretary, grad);
		var query2 = new Parse.Query(Course);
		query2.equalTo(courseSecretary, doc);

		query = Parse.Query.or(query1, query2);

		return query.find();
	}).then(function(courses) {
		query = new Parse.Query(Student);
		query.containedIn(studentCourse, courses);
		return query.find();
	}).then(function(students) {
		res.success(students);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchStudentsForSecretaryWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Secretary);
	query.get(id).then(function(secretary) {
		query = new Parse.Query(Course);
		query.equalTo(courseSecretary, secretary);
		return query.find();
	}).then(function(courses) {
		query = new Parse.Query(Student);
		query.containedIn(studentCourse, courses);
		return query.find();
	}).then(function(students) {
		res.success(students);
	}, function(error) {
		res.error(error);
	});
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Teacher = Parse.Object.extend('Teacher');
const teacherName = 'name';

Parse.Cloud.define('fetchTeachers', function(req, res) {
	var query = new Parse.Query(Teacher);
	query.find().then(function(result) {
		res.success(result);
	}, function(error) {
		res.error(error);
	});
});

Parse.Cloud.define('fetchTeacherWithId', function(req, res) {
	const id = req.params.id;

	if(typeof id !== 'string') {
		res.error('invalid id type');
	}

	var query = new Parse.Query(Teacher);
	query.get(id).then(function(teacher) {
		res.success(teacher);
	}, function(error) {
		res.error(error);
	});
});