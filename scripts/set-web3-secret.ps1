# Eenmalig: Web3Forms Access Key als GitHub Secret zetten (na key op https://web3forms.com)
# Voer uit in PowerShell vanaf je projectmap:
#   .\scripts\set-web3-secret.ps1

$ErrorActionPreference = "Stop"
$repo = "hodaifamahria33-ui/hodaifa-ben-yamaan"

Write-Host "Plak je Web3Forms Access Key (van web3forms.com) en druk Enter." -ForegroundColor Cyan
Write-Host "De key wordt alleen naar GitHub gestuurd, niet opgeslagen in een bestand." -ForegroundColor DarkGray
$key = Read-Host -AsSecureString
$plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
  [Runtime.InteropServices.Marshal]::SecureStringToBSTR($key)
)

if ([string]::IsNullOrWhiteSpace($plain)) {
  Write-Host "Geen key ingevuld. Stop." -ForegroundColor Red
  exit 1
}

$plain | & "${env:ProgramFiles}\GitHub CLI\gh.exe" secret set WEB3FORMS_ACCESS_KEY --repo $repo

if ($LASTEXITCODE -eq 0) {
  Write-Host "OK: secret WEB3FORMS_ACCESS_KEY staat op GitHub." -ForegroundColor Green
  Write-Host "Start nu de deploy: ga naar Actions en 'Re-run' de laatste workflow, of push een kleine wijziging." -ForegroundColor Yellow
} else {
  Write-Host "Mislukt. Controleer of 'gh' ingelogd is: gh auth login" -ForegroundColor Red
  exit $LASTEXITCODE
}
