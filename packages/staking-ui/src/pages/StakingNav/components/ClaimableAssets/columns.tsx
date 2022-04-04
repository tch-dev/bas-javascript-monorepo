import {IValidator} from "@ankr.com/bas-javascript-sdk";
import { Button } from "antd";
import { ColumnProps } from "antd/lib/table";
import {BigNumber} from "bignumber.js";
import { BasStore } from "src/stores/BasStore";
import { undelegate, delegate } from "src/utils/helpers";

import { IDelegatedAssetsData } from "./interface";

export const createTableColumns = (store: BasStore): ColumnProps<any>[]  => {
  
  const handleClaimRewards = async (record: IDelegatedAssetsData, defaultAmount: string) => {
    await undelegate(store, record.validator, defaultAmount);
  }
  
  return [
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (value: BigNumber) => {
        return value.toString(10)
      }
    },
    {
      title: 'Validator',
      dataIndex: 'validator',
      key: 'validator',
      render: (value: IValidator) => {
        return value.validator
      }
    },
    {
      title: 'Action',
      render: (record: IDelegatedAssetsData) => {
        return (
          <div className="flexSpaceAround">
            <Button
              style={{ width: '40%' }}
              type="primary" 
              onClick={async () => handleClaimRewards(record, record.amount)}
            >
              Claim
            </Button>
          </div>
        )
      }
    }
  ];
}
