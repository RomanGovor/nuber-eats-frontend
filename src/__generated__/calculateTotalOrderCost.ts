/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CalculateTotalOrderCostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: calculateTotalOrderCost
// ====================================================

export interface calculateTotalOrderCost_calculateTotalOrderCost {
  __typename: "CalculateTotalOrderCostOutput";
  ok: boolean;
  error: string | null;
  total: number | null;
}

export interface calculateTotalOrderCost {
  calculateTotalOrderCost: calculateTotalOrderCost_calculateTotalOrderCost;
}

export interface calculateTotalOrderCostVariables {
  input: CalculateTotalOrderCostInput;
}
