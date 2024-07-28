/* eslint-disable react/prop-types */

import { useFormik } from "formik";

import { Textarea, Selectfield } from "../form";
import { SvgIcons } from "../svg-icons";
import { usePutTask } from "~/queries/task";

import { validationSchema } from "./utils";

export const FormUpdateModal = ({
  open,
  title,
  data,
  onClose,
  onDelete,
  onUpdate,
}) => {
  const updateMeeting = usePutTask();

  const formSubmit = useFormik({
    initialValues: {
      todo: data?.todo,
      status: data?.status,
      id: data?.id,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        updateMeeting.mutate(values);
        onUpdate();
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
        <div>
          <button
            type="button"
            className="btn btn-warning mr-2"
            onClick={() => onDelete(data?.id)}
          >
            Delete
            <SvgIcons name={"ic_delete"} style={{ height: 20, width: 20 }} />
          </button>
          <button type="submit" className="btn btn-success">
            Update
            <SvgIcons name={"ic_create"} style={{ height: 20, width: 20 }} />
          </button>
        </div>
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
            multiple
            placeholder="Description"
            value={formSubmit.values.todo}
            onChange={formSubmit.handleChange}
            error={formSubmit.touched.todo && Boolean(formSubmit.errors.todo)}
            helperText={formSubmit.touched.todo && formSubmit.errors.todo}
          />

          <Selectfield
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

export default FormUpdateModal;
