IF "%CONDA_BUILD%" == "" (
    call C:\condatmp\miniconda3\conda-bld\cuda-samples_1642725646973\work\build_env_setup.bat
)
REM ===== end generated header =====
if not exist %PREFIX% mkdir %PREFIX%
if not exist %PREFIX%\cuda-samples mkdir %PREFIX%\cuda-samples

rem Directories...
for /D %%i in (.\*) do (
    robocopy /E %%i %PREFIX%\cuda-samples\%%i
)

rem Files...
for %%i in (.\*) do (
    if not %%~ni==build_env_setup.bat (
    if not %%~ni==conda_build.bat (
    if not %%~ni==metadata_conda_debug.yaml (
        xcopy %%i %PREFIX%\cuda-samples
    )
    )
    )
)
