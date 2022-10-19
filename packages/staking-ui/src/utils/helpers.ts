import {
  TValidatorStatus,
  VALIDATOR_STATUS_MAPPING,
} from "@ankr.com/bas-javascript-sdk";
import { message } from "antd";
import prompt from "antd-prompt";
import BigNumber from "bignumber.js";
import { BasStore } from "src/stores/BasStore";

export const statusToStatusId = (key: TValidatorStatus) => {
  return Object.entries(VALIDATOR_STATUS_MAPPING).find(
    ([, val]) => val === key
  )?.[0];
};

export const delegate = async (
  store: BasStore,
  validator: string
): Promise<void> => {
  const amount = await prompt({
    title: "Enter delegation amount (in ether): ",
    rules: [
      {
        required: true,
        message: "You must enter number of tokens",
      },
    ],
    modalProps: {
      width: "400px",
    },
  });

  if (!amount) return;
  const bigAmount = new BigNumber(amount).multipliedBy(10 ** 18).toString(10);

  try {
    const result = await store
      .getBasSdk()
      .getStaking()
      .delegateTo(validator, `${bigAmount}`);
    const receipt = await result.receipt;
    console.log(`Receipt: ${JSON.stringify(receipt, null, 2)}`);

    message.success("Delegating was done!");
  } catch {
    message.error("Delegating was failed...try again!");
  }
};

export const undelegate = async (
  store: BasStore,
  validator: string,
  defaultAmount = "0"
): Promise<void> => {
  const amount = await prompt({
    title: "Enter undelegation amount (in ether): ",
    rules: [
      {
        required: true,
        message: "You must enter number of tokens",
      },
    ],
    value: defaultAmount,
  });

  if (!amount) return;
  const bigAmount = new BigNumber(amount).multipliedBy(10 ** 18).toString(10);

  try {
    const result = await store
      .getBasSdk()
      .getStaking()
      .undelegateFrom(validator, `${bigAmount}`);

    const receipt = await result.receipt;
    console.log(`Receipt: ${JSON.stringify(receipt, null, 2)}`);

    message.success("Undelegating was done!");
  } catch (e) {
    console.log(e);
    message.error("Undelegating was failed...try again!");
  }
};

export const claimRewards = async (
  store: BasStore,
  validator: string
): Promise<void> => {
  try {
    console.log(`Claiming validator fee: ${validator}`);
    const result = await store
      .getBasSdk()
      .getStaking()
      .claimDelegatorFee(validator);

    const receipt = await result.receipt;
    console.log(`Receipt: ${JSON.stringify(receipt, null, 2)}`);

    message.success("Claim was done!");
  } catch (e) {
    console.log(e);
    message.error("Claim has failed...try again!");
  }
};

export const releaseFromJail = async (
  store: BasStore,
  validator: string
): Promise<void> => {
  try {
    console.log(`Releasing validator from jail: ${validator}`);
    const result = await store
      .getBasSdk()
      .getStaking()
      .releaseValidatorFromJail(validator);

    const receipt = await result.receipt;
    console.log(`Receipt: ${JSON.stringify(receipt, null, 2)}`);

    message.success("Release is done!");
  } catch (e) {
    console.log(e);
    message.error("Release has failed...try again!");
  }
};
