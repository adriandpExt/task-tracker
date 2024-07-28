import { ICommonInterator } from "../interfaces/common/ICommonInteractor";
import { ICommonRepository } from "../interfaces/common/ICommonRepository";

export const CommonInterator = (
  repository: ICommonRepository
): ICommonInterator => {
  const getStatus = async () => {
    return await repository.getStatus();
  };

  const getRole = async () => {
    return await repository.getRole();
  };

  return { getStatus, getRole };
};
