"use client";
import { Button } from "@/app/components/ui/button";

import { createBrowserClient } from "@supabase/ssr";

import { ToastAction } from "@/app/components/ui/toast";
import { useToast } from "@/app/components/ui/use-toast";
import { getCurrentFormattedDate } from "@/app/lib/utils";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/app/components/ui/dialog";
import { cancelInvitation } from "../actions/cancelInvitation";

type Props = {
	id: string;
};

export const CancelInvitationButton = ({ id }: Props) => {
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	);

	const { toast } = useToast();

	const cancelInvitationHandler = async () => {
		const response = await cancelInvitation(id);

		toast({
			title: response.message,
			description: getCurrentFormattedDate(),
			action: <ToastAction altText="Close this toast!">Close</ToastAction>,
		});
	};

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="destructive" className="p-3 h-8">
						Cancel
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px] bg-black text-white">
					<DialogHeader>
						<DialogTitle>
							Are you sure you want to cancel this invitation?
						</DialogTitle>
						<DialogDescription>
							You will not be able to undo this action.
						</DialogDescription>
					</DialogHeader>
					<DialogClose asChild>
						<Button variant="destructive" onClick={cancelInvitationHandler}>
							Yes
						</Button>
					</DialogClose>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default CancelInvitationButton;