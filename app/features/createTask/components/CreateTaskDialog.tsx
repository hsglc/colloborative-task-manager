import { CreateTaskForm } from "@/app/features/createTask/components/CreateTaskForm";

import { Button } from "@/app/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/app/components/ui/dialog";

export const CreateTaskDialog = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="text-primaryYellow w-full font-semibold text-lg p-6"
				>
					New Task
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[625px] bg-black text-white">
				<DialogHeader>
					<DialogTitle>Create a new task</DialogTitle>
					<DialogDescription>
						Create a new task to save it to your list
					</DialogDescription>
				</DialogHeader>
				<CreateTaskForm />
			</DialogContent>
		</Dialog>
	);
};
