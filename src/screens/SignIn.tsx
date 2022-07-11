import { StackNavigationProp } from "@react-navigation/stack";
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  VStack,
} from "native-base";
import { VFC } from "react";

import { RootStackParamList } from "../../App";

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

export const SignInScreen: VFC<Props> = ({ navigation }) => {
  return (
    <Center flex={1}>
      <Box w="80%" rounded="4" bg="white">
        <VStack space={4} p={4}>
          <FormControl>
            <FormControl.Label>メールアドレス</FormControl.Label>
            <Input size="lg" />
          </FormControl>
          <FormControl>
            <FormControl.Label>パスワード</FormControl.Label>
            <Input size="lg" type="password" />
          </FormControl>
          <Button
            onPress={() => navigation.navigate("Home")}
            mt={4}
            colorScheme="primary"
          >
            <Text bold color="white">
              サインイン
            </Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
