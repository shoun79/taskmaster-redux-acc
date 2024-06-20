import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const DetailsModal = ({ isOpen, setIsOpen, taskId }) => {
    const { tasks } = useSelector((state) => state.tasksSlice);

    const task = tasks.find(item => item.id === taskId);
    const onCancel = () => {

        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title} >
            <div >
                <p>{task?.description}</p>

                <div className="flex gap-3 justify-end">
                    <button
                        onClick={() => onCancel()}
                        type="button"
                        className="btn btn-danger "
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DetailsModal;