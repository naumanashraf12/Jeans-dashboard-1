import { withFormik } from "formik";
import * as Yup from "yup";

export default withFormik({
  displayName: "WizardProfileForm",
  enableReinitialize: true,
  mapPropsToValues: ({ formData }) => ({
    ...formData,
  }),
  validationSchema: () =>
    Yup.object().shape({
      //   firstName: Yup.string().required("First name is required"),
      //   email: Yup.string().required("Email is required"),
      //   addressLine1: Yup.string().required("Address Line 1 is required"),
    }),
  handleSubmit: (values) => {},
});
