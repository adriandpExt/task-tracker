/* eslint-disable react/prop-types */
import { useFormik } from "formik";

import { Selectfield, Textarea } from "../form";
import { SvgIcons } from "../svg-icons";

import { usePostTask } from "~/queries/task";

import { validationSchema } from "./utils";

export const FormModal = ({ onCreate, open, title, onClose }) => {
  const postMeeting = usePostTask();

  const formSubmit = useFormik({
    initialValues: {
      todo: "",
      status: "Pending",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const createForm = {
        todo: values.todo,
        status: "Pending",
      };
      try {
        await postMeeting.mutateAsync(createForm);

        onCreate();
        formSubmit.resetForm();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const renderActionButton = () => {
    return (
      <div className="modal-action flex justify-between">
        <button className="btn btn-error" type="button" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="btn btn-success">
          Create
          <SvgIcons name={"ic_create"} style={{ height: 20, width: 20 }} />
        </button>
      </div>
    );
  };

  return (
    <dialog className="modal" open={open}>
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-5">{title}</h3>

        <form className="space-y-5" onSubmit={formSubmit.handleSubmit}>
          <Textarea
            label={"Description"}
            name={"todo"}
            placeholder="Description"
            value={formSubmit.values.todo}
            onChange={formSubmit.handleChange}
            error={formSubmit.touched.todo && Boolean(formSubmit.errors.todo)}
            helperText={formSubmit.touched.todo && formSubmit.errors.todo}
          />

          <Selectfield
            disabled
            label="Status"
            name={"status"}
            value={formSubmit.values.status}
            onChange={formSubmit.handleChange}
            error={
              formSubmit.touched.status && Boolean(formSubmit.errors.status)
            }
            helperText={formSubmit.touched.status && formSubmit.errors.status}
            options={[
              { label: "Pending", value: "Pending" },
              { label: "Done", value: "Done" },
            ]}
          />

          {renderActionButton()}
        </form>
      </div>
    </dialog>
  );
};

export default FormModal;
