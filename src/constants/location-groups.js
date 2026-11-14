// 2026-11-14 user chot cach phan nhom vi tri dat thiet bi:
// - GA / GD: danh sach l_code user gui (cot ben duoi)
// - GI: TAT CA cac vi tri con lai (moi thiet bi deu co ma dang LE...)
// Them/bot noi chi sua file nay; thu tu GROUP_ORDER = thu tu tab tren home.
const EXPLICIT_LOCATIONS = {
  GA: [
    'LE132', 'LE133', 'LE134', 'LE135', 'LE136', 'LE137', 'LE138', 'LE139',
    'LE140', 'LE141', 'LE142', 'LE143', 'LE144', 'LE145', 'LE146', 'LE147',
    'LE148', 'LE149', 'LE150', 'LE151', 'LE152', 'LE153', 'LE154', 'LE155',
    'LE156', 'LE157', 'LE158', 'LE159', 'LE160', 'LE161', 'LE162', 'LE163',
    'LE198',
  ],
  GD: [
    'LE164', 'LE165', 'LE166', 'LE167', 'LE168', 'LE169', 'LE170', 'LE171',
    'LE172', 'LE173', 'LE174', 'LE175', 'LE176', 'LE177', 'LE178', 'LE179',
    'LE180', 'LE181', 'LE182', 'LE183', 'LE184', 'LE185', 'LE186', 'LE187',
    'LE188', 'LE189', 'LE190', 'LE191', 'LE192', 'LE193', 'LE194', 'LE195',
    'LE199',
  ],
};

// Nhom "con lai" - chua moi l_code khong nam trong EXPLICIT_LOCATIONS
const REST_GROUP = 'GI';

const GROUP_ORDER = ['GI', 'GA', 'GD'];

const GROUP_BY_LOCATION = new Map();
for (const [group, locations] of Object.entries(EXPLICIT_LOCATIONS)) {
  for (const location of locations) {
    GROUP_BY_LOCATION.set(location.toUpperCase(), group);
  }
}

function normalizeLocationGroup(value) {
  return String(value || '').trim().toUpperCase();
}

function listLocationGroups() {
  return GROUP_ORDER.slice();
}

// Vi tri trong (khong co ma) khong thuoc nhom nao
function locationGroupOf(location) {
  const code = normalizeLocationGroup(location);
  if (!code) return '';
  return GROUP_BY_LOCATION.get(code) || REST_GROUP;
}

module.exports = {
  EXPLICIT_LOCATIONS,
  REST_GROUP,
  GROUP_ORDER,
  listLocationGroups,
  normalizeLocationGroup,
  locationGroupOf,
};
