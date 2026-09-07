//An enum (enumeration) is simply a way to define a fixed set of named constants.
enum TestStatus
{
    pass="PASS",
    fail="FAIL",
    skip="SKIP",
    pending="PENDING",
    blocked="BLOCKED"
}

console.log(TestStatus.pass)