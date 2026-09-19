"use client";

import { Plant } from "@/types/plant";

const PlantForm = ({ plants }: { plants: Plant[] }) => {
	// if (plants.length > 0) {
	// 	return (
	// 		<Dialog>
	// 			<DialogTrigger render={<Button variant="outline" />}>
	// 				Open Dialog
	// 			</DialogTrigger>
	// 			<DialogPopup className="sm:max-w-sm">
	// 				<DialogHeader>
	// 					<DialogTitle>Edit profile</DialogTitle>
	// 					<DialogDescription>
	// 						Make changes to your profile here. Click save when you&apos;re
	// 						done.
	// 					</DialogDescription>
	// 				</DialogHeader>
	// 				<Form className="contents">
	// 					<DialogPanel className="grid gap-4">
	// 						<Field>
	// 							<FieldLabel>Name</FieldLabel>
	// 							<Input defaultValue="Margaret Welsh" type="text" />
	// 						</Field>
	// 						<Field>
	// 							<FieldLabel>Username</FieldLabel>
	// 							<Input defaultValue="@maggie.welsh" type="text" />
	// 						</Field>
	// 					</DialogPanel>
	// 					<DialogFooter>
	// 						<DialogClose render={<Button variant="ghost" />}>
	// 							Cancel
	// 						</DialogClose>
	// 						<Button type="submit">Save</Button>
	// 					</DialogFooter>
	// 				</Form>
	// 			</DialogPopup>
	// 		</Dialog>
	// 	);
	// }
	return (
		<div>
			<div>
				{/* {plants.map((plants) => ( */}
				{/* // <Card key={plants.id}>{plants.name}</Card> */}
				{/* // ))} */}
			</div>
		</div>
	);
};

export default PlantForm;
