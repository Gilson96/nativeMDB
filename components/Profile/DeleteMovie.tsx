import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useRemoveFromMyListMutation } from "@/lib/accountEndpoints";
import { RootState } from "@/store";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";

type DeleteMovieProps = {
  selectedValue: string;
  movieId: number | undefined;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteMovie = ({
  selectedValue,
  movieId,
  setIsDeleted,
}: DeleteMovieProps) => {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.uid;
  const [removeFromMyList, { isSuccess }] = useRemoveFromMyListMutation();

  return (
    <>
      <Pressable onPress={() => setShowAlertDialog(true)}>
        <Feather name="x" size={15} color="black" />
      </Pressable>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Are you sure you want to remove this movie from the list?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text>
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              className="bg-orange-950"
              onPress={async () => {
                try {
                  const res = await removeFromMyList({
                    userId,
                    list: selectedValue,
                    movieId,
                  }).unwrap();
                  if (isSuccess) {
                    return setIsDeleted(true);
                  }
                  setShowAlertDialog(false);
                  console.log("Success!", res);
                } catch (err) {
                  console.error("Add to favorites failed", err);
                }
              }}
            >
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
export default DeleteMovie;
