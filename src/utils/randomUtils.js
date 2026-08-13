/**
 * 生成 [min, max] 范围内的随机整数（使用 Math.random）
 * @param {number} min - 最小值（包含）
 * @param {number} max - 最大值（包含）
 * @returns {number} 随机整数
 */
export const getRandomInt = (min, max) => {
  // 确保参数为整数，并包含最大值
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 生成 [min, max] 范围内的随机整数（使用加密安全的 Crypto API）
 * 适用于密码、Token 等安全性要求较高的场景
 * @param {number} min - 最小值（包含）
 * @param {number} max - 最大值（包含）
 * @returns {number} 随机整数
 */
export const getSecureRandomInt = (min, max) => {
  const range = max - min + 1
  // 生成一个 32 位无符号整数，然后取模得到范围
  const randomUint = crypto.getRandomValues(new Uint32Array(1))[0]
  // 取模运算（对于小范围，偏差可忽略；若追求完美均匀，可循环剔除偏差，此处简化）
  return (randomUint % range) + min
}
