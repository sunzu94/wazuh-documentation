/* -----------------------------------------------------------------------------
  Code to be used in any page
----------------------------------------------------------------------------- */

/* Using ReDoc ============================================================== */
const minVersionRedoc = '4.0';
const useApiRedoc = (compareVersion(DOCUMENTATION_OPTIONS.VERSION, minVersionRedoc) >= 0);
/* List of nodes in the toctree and the content that should be open in a new tab */
const newTabNodes = [
  'user-manual/api/reference',
  'cloud-service/apis/reference',
];

/* Helpful functions ======================================================== */

/**
 * Compare the numbers of 2 release versions
 * @param {string} version1 First version to compare
 * @param {string} version2 Second version to compare
 * @return {int} Resulting value:
 *  * 1 if version1 > version2
 *  * 0 if version1 = version2
 *  * -1 if version1 < version2
 *  * false if the comparation could not be done
 */
function compareVersion(version1, version2) {
  let result = false;
  if ( typeof(version1) == 'string' && typeof(version2) == 'string') {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    if ( v1.length >= 2 && v2.length >= 2 ) {
      v1 = v1.map((x) =>parseInt(x));
      v2 = v2.map((x) =>parseInt(x));
      if ( v1[0] > v2[0] ) {
        result = 1;
      } else if ( v1[0] < v2[0] ) {
        result = -1;
      } else {
        if ( v1[1] > v2[1] ) {
          result = 1;
        } else if ( v1[1] < v2[1] ) {
          result = -1;
        } else {
          result = 0;
        }
      }
    }
  }
  return result;
}