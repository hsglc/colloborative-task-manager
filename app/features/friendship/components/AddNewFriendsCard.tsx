"use client";

import { FormActionButton } from "@/app/components/shared/FormActionButton";
import { Button } from "@/app/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { addFriends } from "@/app/features/friendship/actions/addFriends";

import { getCurrentFormattedDate } from "@/app/lib/utils";
//@ts-expect-error
import { useFormState } from "react-dom";

import { ExclamationTriangleIcon, PersonIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { AnimatePresence, motion } from "framer-motion";

const initialState = {
	title: null,
	message: null,
	isSuccess: false,
};

export const AddNewFriendsCard = () => {
	const [state, formAction] = useFormState(addFriends, initialState);

	console.log("state :", state);
	return (
		<Card className="w-full max-w-lg">
			<form action={formAction}>
				<CardHeader className="flex flex-row items-start">
					<div className="space-y-1.5">
						<CardTitle>Send friend request</CardTitle>
						<CardDescription>Invite a friend via email.</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="border-t pt-4">
					<div className="space-y-2">
						<Label className="sr-only" htmlFor="user_email">
							Email
						</Label>
						<Input
							name="user_email"
							className="text-black"
							id="user_email"
							placeholder="Enter friend's email"
							type="email"
						/>
					</div>
				</CardContent>
				<CardFooter className="space-x-8">
					<Button type="button" variant="ghost" className="bg-black text-white">
						Cancel
					</Button>
					<FormActionButton>Send Invititation</FormActionButton>
				</CardFooter>

				<AnimatePresence>
					{state?.message ? (
						<motion.div
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -50, opacity: 0 }}
						>
							<Alert variant={state.isSuccess ? "success" : "destructive"}>
								{state.isSuccess ? (
									<PersonIcon className="h-4 w-4" />
								) : (
									<ExclamationTriangleIcon className="h-4 w-4" />
								)}
								<AlertTitle>{state.title}</AlertTitle>
								<AlertDescription>
									{state.message}
									<br />
									{getCurrentFormattedDate()}
								</AlertDescription>
							</Alert>
						</motion.div>
					) : null}
				</AnimatePresence>
			</form>
		</Card>
	);
};
