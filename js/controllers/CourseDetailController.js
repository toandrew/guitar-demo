app.controller('CourseDetailController', function($rootScope, $scope, courseDetailData, $log) {
    //$rootScope.$emit('hideNav', false);

        var course = $scope;

        course.steps = ['piece', 'full', 'more'];
        course.step = 0;

        course.canShow = function(id) {
            console.log(id);
            if (id === 1) {
                return false;
            }
            return true;
        }
        course.getAllSteps = function() {
            return course.steps;
        };

        course.isFirstStep = function () {
            return course.step === 0;
        };

        course.isLastStep = function () {
            return course.step === (course.steps.length - 1);
        };

        course.isCurrentStep = function (step) {
            return course.step === step;
        };

        course.setCurrentStep = function (step) {
            course.step = step;
        };

        course.getCurrentStep = function () {
            return course.steps[course.step];
        };

        course.getNextLabel = function () {
            return (course.isLastStep()) ? 'Submit' : 'Next';
        };

        course.handlePrevious = function () {
            course.step -= (course.isFirstStep()) ? 0 : 1;
        };

        course.handleNext = function () {
            if (course.isLastStep()) {
                $modalInstance.close(modal.wizard);
            } else {
                course.step += 1;
            }
        };

        course.dismiss = function(reason) {
            $modalInstance.dismiss(reason);
        };
});
