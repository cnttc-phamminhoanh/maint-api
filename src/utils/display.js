// 2026-11-14 user chot: ten thiet bi HIEN THI = equ_name + " model: " + equ_spec.
// Bo qua khi equ_spec rong/toan khoang trang, hoac equ_spec da nam san trong
// equ_name (tranh «May in XYZ model: XYZ»). Chi doi HIEN THI — cot
// eqm_mnt.equ_name va snapshot eqm_mnt_delay.equ_name giu nguyen ten goc.

const ALIAS_RE = /^[a-z_][a-z0-9_]*$/i;

function displayNamePartsSql(nameExpr, specExpr) {
  return `CASE
    WHEN NULLIF(LTRIM(RTRIM(${specExpr})), '') IS NULL THEN ${nameExpr}
    WHEN CHARINDEX(LTRIM(RTRIM(${specExpr})), ISNULL(${nameExpr}, '')) > 0 THEN ${nameExpr}
    ELSE CONCAT(${nameExpr}, N' model: ', LTRIM(RTRIM(${specExpr})))
  END`;
}

// alias = alias cua bang eqm_mnt trong query (vd 'd', 'e')
function displayNameSql(alias) {
  if (typeof alias !== 'string' || !ALIAS_RE.test(alias)) {
    throw new Error(`displayNameSql: alias khong hop le (${alias})`);
  }
  return displayNamePartsSql(`${alias}.equ_name`, `${alias}.equ_spec`);
}

module.exports = { displayNameSql, displayNamePartsSql };
