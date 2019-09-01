/**
 * 获取分页信息
 * @param param
 */
export function getOffsetLimit(param: {page: number, size: number}): {offset: number, limit: number} {
  const limit = param.size;
  const offset = (param.page - 1) * limit;
  return {
    offset,
    limit,
  };
}
